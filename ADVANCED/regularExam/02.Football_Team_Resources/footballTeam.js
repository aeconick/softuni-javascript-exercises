class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let newPlayersAdded = [];
        for (const player of footballPlayers) {
            let [name, age, value] = player.split('/');
            age = Number(age);
            value = Number(value); // IS IN MILLIONS!
            if (!this.invitedPlayers.some(x => x.name == name)) {
                newPlayersAdded.push(name);
                this.invitedPlayers.push({
                    name,
                    age,
                    value,
                });
            } else {
                let found = this.invitedPlayers.find(x => x.name == name);
                if (found.value < value) {
                    found.value = value;
                }
            }
        }
        return `You successfully invite ${newPlayersAdded.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        if (!this.invitedPlayers.some(x => x.name == name)) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            let found = this.invitedPlayers.find(x => x.name == name);
            if (found.value > playerOffer) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${found.value - playerOffer} million more are needed to sign the contract!`)
            } else {
                let found = this.invitedPlayers.find(x => x.name == name);
                found.value = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }
        }
    }

    ageLimit(name, age){
        if (!this.invitedPlayers.some(x => x.name == name)) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let found = this.invitedPlayers.find(x => x.name == name);
        if(found.age<age){
            let difference = age-found.age;
            if(difference<5){
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            }else{
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }else{
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult(){
        let result = [];
        result.push('Players list:');
        this.invitedPlayers
        .sort((a,b)=>(a.name).localeCompare(b.name))
        .forEach(x=>{
            result.push(`Player ${x.name}-${x.value}`)
        });

        return result.join('\n');
    }

}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


