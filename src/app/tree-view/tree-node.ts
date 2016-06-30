export class TreeNode{
    name:string;
    branches:Array<String>;
    files:Array<string>
    expanded:boolean;
    
    constructor(name:string,branches: Array<string>,files: Array<string>,expanded:boolean){
        this.name = name;
        this.branches = branches;
        this.files = files;
        this.expanded = expanded
    }
}
