const escapeStr = "'\\/\"`";
const arr = [true*4, '2'];
const obj = new Object();
obj.str = "tt";
obj.num = true*4;
obj.bool = true;
obj.undef = undefined;
const nested = new Object;
nested.arr = [4, undefined, '2']
nested.obj = new Object();
nested.obj.str = "Monarchie";
nested.obj.num = true*4;
nested.obj.bool = true;
deepFreeze(obj)
deepFreeze(nested)
deepFreeze(nested.obj)

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }