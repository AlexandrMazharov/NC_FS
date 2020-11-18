export function Logger(target: Object, method: string, descriptor: PropertyDescriptor) {

    descriptor.value = function (...args: (new () => any)[]) {
        console.log("Object " + args[0].name + " created");

        return new args[0]();
    }
}
