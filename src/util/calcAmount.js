const calcAmount = (form, delegates, baseAmount) => {
    let amount = baseAmount
    form = {
        ...form,
        delegates
    }
    if (form.accommodation && form.accommodation === 'Boarding') {
        if (form.location == 'Greensprings Campus Lekki') {
            if (form.lodging == 'Single Bed') {
                amount += 35000
            }
            if (form.lodging == 'Dormitory Style') {
                amount += 25000
            }
        }
        if (form.location == 'Swiss International Hotel VGC') {
            if (form.lodging == 'Superior Room') {
                amount += 65000
            }
            if (form.lodging == 'Deluxe Room') {
                amount += 75000
            }
        }
        if (form.location == 'The Patron Hotel') {
            if (form.lodging == 'Standard Room') {
                amount += 27000
            }
            if (form.lodging == 'Executive Room') {
                amount += 37000
            }
        }
    }
    if (form.delegates.length > 0 && baseAmount < 100000) {
        let totalAmount = 0
        if (form.delegates.length < 6) {
            totalAmount = 5 * baseAmount
        } else {
            totalAmount = form.delegates.length * baseAmount
        }
        // for (let i = 5; i <= form.delegates.length; i++) {
        //     amount += percentage
        // }
        const percentage = totalAmount * 0.1
        amount = totalAmount - percentage
    }
    
    form.delegates.map((delegate) => {
        if (delegate.accommodation && delegate.accommodation === 'Boarding') {
            if (delegate.location == 'Greensprings Campus Lekki') {
                if (delegate.lodging == 'Single Bed') {
                    amount += 35000
                }
                if (delegate.lodging == 'Dormitory Style') {
                    amount += 25000
                }
            }
            if (delegate.location == 'Swiss International Hotel VGC') {
                if (delegate.lodging == 'Superior Room') {
                    amount += 65000
                }
                if (delegate.lodging == 'Deluxe Room') {
                    amount += 75000
                }
            }
            if (delegate.location == 'The Patron Hotel') {
                if (delegate.lodging == 'Standard Room') {
                    amount += 27000
                }
                if (delegate.lodging == 'Executive Room') {
                    amount += 37000
                }
            }
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