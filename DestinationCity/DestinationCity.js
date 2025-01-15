/*
Problem Description

    LeetCode - 1436. Destination City
    Q. You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

    It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

*/

// Solution 1 - nested for
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let destination;
    let match = false;
    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths.length; j++) {
            if (paths[i][1] === paths[j][0]) {
                match = true;
                break;
            }
            else {
                match = false;
                continue;
            }
        }
        if (!match) {
            destination = paths[i][1];
        }
    }
    return destination;
};

// Solution 2 - hashmap

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let pathsMap = new Map();
    for (let i = 0; i < paths.length; i++) {
     pathsMap.set(paths[i][0], paths[i][1]);
    }
    for (let j = 0; j < paths.length; j++) {
        if (pathsMap.get(paths[j][1]) === undefined) {
            return paths[j][1];
        }
    }
};