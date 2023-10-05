const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore;
if (!pagesJson)
    pagesStore = []
else
    pagesStore = JSON.parse(pagesJson)


function saveData(){
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
    getAllPages(){
        return pagesStore;
    },

    removePage(index){
        pagesStore.splice(index, 1);
        saveData();
    },

    getSinglePage(index){
        return pagesStore[index];
    },
    editPage(index, page){
        pagesStore[index] = page;
        saveData();
    },

    addPage(page){
        pagesStore.push(page);
        saveData();
    }
}
