const list ='abcded'.split('');

function traverse(list, history = []) {
    if(!list.length) {
        console.log(history);
    }
    list.forEach(function(item, index) {
        const copy = [...list];
        const curr = copy.splice(index, 1);
        traverse(copy, history.concat(curr));
    })
}

// traverse(list);

function combine(list, n, selected = []) {
    if(selected.length === n) {
        console.log(selected);
        return;
    }
    list.forEach((item, index) => {
        const copy = list.slice(index);
        const curr = copy.splice(0, 1);
        combine(copy, n, selected.concat(curr))
    })
}

combine(list, 2);