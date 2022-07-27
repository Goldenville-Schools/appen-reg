const calcAmount = (form, delegates, baseAmount) => {
    let amount = baseAmount
    form = {
        ...form,
        delegates
    }
    if (form.accommodation && form.accommodation === 'Boarding') {
        amount += 40000
    }
    if (form.delegates.length > 4) {

        const totalAmount = form.delegates.length * baseAmount
        const percentage = totalAmount * 0.05
        // for (let i = 5; i <= form.delegates.length; i++) {
        //     amount += percentage
        // }
        amount = totalAmount - percentage
    }
    
    form.delegates.map((delegate) => {
        if (delegate.accommodation && delegate.accommodation === 'Boarding') {
            amount += 40000
        }
    })

    if (form.title) {
        let { title, ...rest } = form
        form = { ...rest }
    }
    if (form.school) {
        let { school, ...rest } = form
        form = { ...rest }
    }
    form.delegates.map((delegate) => {
        let { school, ...rest } = delegate
        delegate = { ...rest }
    })
    localStorage.setItem('form', JSON.stringify(form))
    localStorage.setItem('amount', JSON.stringify(amount))
    return amount
}

export default calcAmount