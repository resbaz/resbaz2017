function fetchData(data){
    return window.dataStore[data.site]
}

function injectMap(){
    document.getElementById('maptarget').innerHTML = layout.partials.map
}

window.dataStore = {}
