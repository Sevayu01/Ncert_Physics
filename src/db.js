let db;
const request = indexedDB.open("Physics World");

request.onerror = (event) => {
  console.error("Failed to fetch scores!");
};

request.onsuccess = (event) => {
  db = event.target.result;
};

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("modules", { keyPath: "name" });
  objectStore.createIndex("score", "score", { unique: false });
};

export const addScore = (moduleName, score) => {
  try {
    const transaction = db.transaction("modules", "readwrite");
    const objectStore = transaction.objectStore("modules");

    const moduleData = {
      name: moduleName,
      score: score,
    };

    const request = objectStore.add(moduleData);

    request.onsuccess = () => {
      console.log("Module added to the database");
    };

    request.onerror = (event) => {
      console.error("Error adding module:", event.target.error);
    };
  } catch (error) {
    console.error("Error accessing database:", error);
  }
};

export const updateScore = (moduleName, newScore) => {
  try {
    const transaction = db.transaction("modules", "readwrite");
    const objectStore = transaction.objectStore("modules");

    const request = objectStore.get(moduleName);

    request.onsuccess = (event) => {
      const existingModule = event.target.result;

      if (existingModule) {
        existingModule.score = newScore;
        const updateRequest = objectStore.put(existingModule);

        updateRequest.onsuccess = () => {
          console.log(`Progress updated for module: ${moduleName}`);
        };

        updateRequest.onerror = (event) => {
          console.error("Error updating module score:", event.target.error);
        };
      } else {
        console.error(`Module not found: ${moduleName}`);
      }
    };

    request.onerror = (event) => {
      console.error("Error fetching module:", event.target.error);
    };
  } catch (error) {
    console.error("Error accessing database:", error);
  }
};

export const fetchScoreList = () => {
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction("modules", "readonly");
      const objectStore = transaction.objectStore("modules");
      const modulesList = [];

      objectStore.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;

        if (cursor) {
          modulesList.push(cursor.value);
          cursor.continue();
        } else {
          resolve(modulesList);
        }
      };

      transaction.onerror = (event) => {
        resolve([]);
      };
    } catch (error) {
      resolve([]);
    }
  });
};

export { db, request };
