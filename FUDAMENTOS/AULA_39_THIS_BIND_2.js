function pessoa(){
    this.idade = 0

    const self = this
    set_intervalo(function(){
        self.idade++
        console.log(self.idade)
    }/* .bind(this)*/ , 1000)
}

// new pessoa(); ctrl + alt + m : para o comando