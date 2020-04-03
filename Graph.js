
const graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        end: 1
    },
    b: {
        a: 3,
        end: 5
    },
    end: null
}

function findPath (graph, start, path, cost = 0) {
    for(const target in start) {
        if (target != 'end') {
            findPath(graph, graph[target], path + `->${target}`, cost + start[target])
        } else {
            console.log(path += `->end`,' ', cost + start[target]);
        }
    }
}

const graph2 = {
    start: {
        a: 5,
        b: 2
    },
    a: {
        c: 4,
        d: 2
    },
    b: {
        a: 8,
        d: 7
    },
    c: {
        d: 6,
        end: 3
    },
    d: {
        end: 1
    }
}

findPath(graph2, graph2.start, 'start')


