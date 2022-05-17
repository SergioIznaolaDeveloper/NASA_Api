export default function fetchNeas(neasInputs, orderBy, setList, setNeasInputs) {
        if (neasInputs.length > 4) {
          setList([""])
          setNeasInputs([""])
        }
        if(neasInputs[0] === "" || neasInputs[1] === ""){
          if(orderBy===""){
 
            fetch(`/api/astronomy/neas/class/`)
            .then((res) => res.json())
            .then((list) => setList(list))
          } else {
            fetch(`/api/astronomy/neas/?order=${orderBy}`)
            .then((res) => res.json())
            .then((list) => setList(list))
          }
      } else if (neasInputs[0] === "from" && neasInputs[2] === "to"){

        if(orderBy===""){
        fetch(`/api/astronomy/neas?from=${neasInputs[1]}&to=${neasInputs[3]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
      } else {

        fetch(`/api/astronomy/neas?from=${neasInputs[1]}&to=${neasInputs[3]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
      }
      } else if (neasInputs[0] === "to" && neasInputs[2] === "from"){

        if(orderBy===""){
        fetch(`/api/astronomy/neas?from=${neasInputs[3]}&to=${neasInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/neas?from=${neasInputs[3]}&to=${neasInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (neasInputs[0] === "from"){

        if(orderBy===""){
        fetch(`/api/astronomy/neas?from=${neasInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/neas?from=${neasInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (neasInputs[0] === "to" ){

        if(orderBy===""){
        fetch(`/api/astronomy/neas?to=${neasInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list)) 
        } else {
        fetch(`/api/astronomy/neas?to=${neasInputs[1]}&order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } 
      } else if (neasInputs[0] === "orbit_class" && neasInputs[1] !== ""){

        if(orderBy===""){
        fetch(`/api/astronomy/neas/class/${neasInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } else {
          fetch(`/api/astronomy/neas/class/${neasInputs[1]}/${orderBy}`)
          .then((res) => res.json())
          .then((list) => setList(list))
        }
      } else if (neasInputs[0] === "h_mag" && neasInputs[1] !== ""){

        if(orderBy===""){
        fetch(`/api/astronomy/neas/class/${neasInputs[1]}`)
        .then((res) => res.json())
        .then((list) => setList(list))
        } else {
          fetch(`/api/astronomy/neas/class/${neasInputs[1]}/${orderBy}`)
          .then((res) => res.json())
          .then((list) => setList(list))
        }
      } 
    }
