function f() {

    let input = document.getElementById('input')

    let out=document.getElementById('output')

    let dim=[['r23r23','2e2e'],['22','43']]

    let dimtxt=toString(dim)
    
    input.value=dimtxt

    let x=input.value

    let q=''

    for (let z=0;z<dim.length;z++){

        q=q+'{\n '+'sd:'+dim[z][1]+'\n}\n'

    }

    out.value=q

}