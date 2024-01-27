const user = {
    username: 'andres',
    email:'correo@google.com',
    age: 20,
    ranking: 9,
};


/*const detail = ({username, email}) => {
    //const {username, email} = user;
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}
const detail = (user) => {
    //const {username, email} = user;
    console.log(`El detalle del usuario ${user.username} con correo ${user.email}`);
}*/

const detail = (user) => {
    const {username, email} = user;
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}


detail (user)
//console.log(`${username} tiene ${age} de edad`);
//console.log(ranking);

