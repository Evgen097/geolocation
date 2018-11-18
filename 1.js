// {id: 1, coordinates: [36.3889, 49.9321] },
// {id: 2, coordinates: [36.3875, 49.9307] },

// 36.388044799999996, 49.931878399999995
// geojsonGun.coordinates[0] = position.coords.longitude;
// geojsonGun.coordinates[1] = position.coords.latitude;

//gun
// [36.388044799999996, 49.931878399999995]

// ufo
// [36.38374999999993, 49.929]
// [36.3907, 49.928199999999926]
var gun = {coordinates: [36.388044799999996, 49.931878399999995]}
var ufos = [
    {id: 1, coordinates: [36.38374999999993, 49.929]},
    {id: 2, coordinates: [36.3907, 49.928199999999926]},
]
var valueCollision = 0.005;
function checkCollision(gun, ufos) {
    ufos.forEach( ufo =>{
        if(  Math.abs((gun.coordinates[0] - ufo.coordinates[0])) < valueCollision &&
            Math.abs((gun.coordinates[1] - ufo.coordinates[1])) < valueCollision){

            killUfo(ufo)
        }
    })
}

checkCollision(gun, ufos)





























