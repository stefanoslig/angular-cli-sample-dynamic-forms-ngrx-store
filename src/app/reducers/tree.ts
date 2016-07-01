import {ActionReducer, Action} from "@ngrx/store";
import { TreeNode} from "../tree-view/index";
import { TOGGLE_NODE } from '../actions/index';

let node1 : TreeNode = new TreeNode("Java", ["Object", "Oriented"], ["obj.java","obj2.java"],false) ;
let node2 : TreeNode = new TreeNode("C++", ["Object", "Oriented"], ["obj.cpp","obj2.cpp"],false) ;
let node3 : TreeNode = new TreeNode("Python", ["Object", "Oriented"], ["obj.py","obj2.py"],false) ;
let node4 : TreeNode = new TreeNode("Javascript", ["Object", "Oriented"], ["obj.js","obj2.js"],false) ;
      
let nodes : TreeNode[] = [node1, node2, node3, node4];
console.log(nodes);
export const tree : ActionReducer<TreeNode[]> = (state : TreeNode[] = nodes, action: Action) => {
  switch(action.type) {
      case TOGGLE_NODE:
        return state.map(node => {
                if(node.name !== action.payload){
                return node;
                }
                return (<any>Object).assign({}, node, {
                    expanded: !node.expanded
                });
            });
      default:
          return state;
    }
};
