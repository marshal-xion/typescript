import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(ItemObj: ListItem): void,
    removeItem(id: string):void,
}

export default class FullList implements List {

    //instanciate here and call it any time
    static instance: FullList = new FullList();

    //singleton - one instance of class so we declare it private
    // we have only 1 list in this app so we only need 1 instance
    private constructor(private _list:ListItem[] = [],   ){}   

    get list(): ListItem[] {
        return this._list;   
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)
              
        parsedList.forEach(itemObj =>{
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list =[]
        this.save()
    }

    addItem(ItemObj: ListItem): void {
        this._list.push(ItemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
    

}