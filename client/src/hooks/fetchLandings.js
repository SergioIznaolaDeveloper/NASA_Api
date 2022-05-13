export default function fetchLandings(landingInputs, orderBy, setList) {
        if (landingInputs.length >= 4) {
          setList([""])
        }
        if(landingInputs[0] === "" || landingInputs[1] === ""){
          if(orderBy===""){
            fetch(`/api/astronomy/landings/mass/`)
            .then((res) => res.json())
            .then((list) => setList(list))
          } else {
            fetch(`/api/astronomy/landings/?order=${orderBy}`)
            .then((res) => res.json())
            .then((list) => setList(list))
          }
      } else if (landingInputs[0] === "from" && landingInputs[2] === "to"){
        if(orderBy===""){
        fetch(`/api/astronomy/landings?from=${landingInputs[1]}&to=${landingInputs[3]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
      } else {
        fetch(`/api/astronomy/landings?from=${landingInputs[1]}&to=${landingInputs[3]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
      }
      } else if (landingInputs[0] === "to" && landingInputs[2] === "from"){
        if(orderBy===""){
        fetch(`/api/astronomy/landings?from=${landingInputs[3]}&to=${landingInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/landings?from=${landingInputs[3]}&to=${landingInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (landingInputs[0] === "from"){
        if(orderBy===""){
        fetch(`/api/astronomy/landings?from=${landingInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/landings?from=${landingInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (landingInputs[0] === "to" ){
        if(orderBy===""){
        fetch(`/api/astronomy/landings?to=${landingInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/landings?to=${landingInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (landingInputs[0] === "mass" && landingInputs[1] !== ""){
        if(orderBy===""){
        fetch(`/api/astronomy/landings/mass/${landingInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } else {
          fetch(`/api/astronomy/landings/mass/${landingInputs[1]}/${orderBy}`)
          .then((res) => res.json())
          .then((list) => setList(list))
        }
      } else if (landingInputs[0] === "class" && landingInputs[1] !== ""){
        if(orderBy===""){
        fetch(`/api/astronomy/landings/class/${landingInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } else {
          fetch(`/api/astronomy/landings/class/${landingInputs[1]}/${orderBy}`)
          .then((res) => res.json())
          .then((list) => setList(list))
        }
      } 
    }
