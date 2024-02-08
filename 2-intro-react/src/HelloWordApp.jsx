import PropTypes  from "prop-types";
import { Title } from "./components/Title";
import { UserDatails } from "./components/UserDatails";
import { Book } from "./components/Book";
//export function HelloWorld(props){

    //const name = 'Pepe'
//    return (
//    <>
//        <h1>Hello World</h1>
//        <p>Como estas {props.user} con el id {props.id} ???? </p>
//    </>
//   );
//}

export const HelloWorldApp = ({user,id,title,book})  => {

    console.log(title)
    //const name = 'Pepe'
    // se crea componen para poder usar en diferentes app en react
    return (
    <>
        <Title title={ title } />
        <UserDatails user={ user } id={ id }/>
        <Book book = {book}/>
    </>
    );
}

HelloWorldApp.propTypes = {
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object.isRequired
}

HelloWorldApp.defaultProps = {
    title: 'Texto por defecto',
    book:'Hey como estan'
}

/*export const HelloWorld = (props)  => {

    console.log(props)
    //const name = 'Pepe'
    return (
    <>
        <h1>Hello World</h1>
        <p>Como estas {props.user} con el id {props.id} ???? </p>
    </>
    );
}*/