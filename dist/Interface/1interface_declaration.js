"use strict";
let user = {
    country: "tunisia",
    username: "salim",
    id: 7
};
console.log(user);
function getData(data) {
    console.log(` the candidat ${data.username} has id number ${data.id} and living in ${data.country}`);
}
getData({ id: 10, username: "semah", country: 'egypt' });
getData({ id: 300, country: 'krib', username: "fedi" });
//# sourceMappingURL=1interface_declaration.js.map