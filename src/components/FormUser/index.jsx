import styles from "./FormUser.module.css";

export const FormUser = () => {
    function user(formData) {
        const querry = formData.get("querry");
        alert(`You searched for '${querry}`)
    }
    return (
        <form action={user} className={styles.flex}>
            <label htmlFor="name">Digite seu nome: 
                <input type="text" id="name" />
            </label>
            <label htmlFor="email">Digite seu e-mail: 
                <input type="email" id="email" />
            </label>
            <label htmlFor="phone">Digite seu telefone: 
                <input type="number" id="phone" />
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}