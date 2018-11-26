class Report{
    constructor(params){
        let {form}=params
        form.addEventListener('submit',(event)=>{
            event.preventDefault()
            let userName=form.user_name.value
            console.log(`${userName} submit it!`)
        })
    }
}