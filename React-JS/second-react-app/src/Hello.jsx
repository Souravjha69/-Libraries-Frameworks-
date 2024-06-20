function Hello () {


    // const myName = "Sourav";
    let fullName = () => {
        return 'Sourav kumar jha'
    }
    let number = 456;

    return (
        <>
        <p>Message Number : {number}. I'm you master {fullName()}</p> 
        </>
        // This is Dynamism
    );
}

export default Hello;