const recipe = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dostałem kebaba');
    }, 1001);

    setTimeout(() => {
        reject('Oszukali mnie, banda złodziei polskich decydentów');
    }, 1000)
});


recipe
    .then((kebab) => {
        console.log(kebab)
    })
    .catch((fraud) => {
        console.log(fraud)
    });

