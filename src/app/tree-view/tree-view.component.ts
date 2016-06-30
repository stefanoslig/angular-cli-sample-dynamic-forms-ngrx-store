import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TreeNode } from './index';

@Component({
  moduleId: module.id,
  selector: 'app-tree-view',
  templateUrl: 'tree-view.component.html',
  styleUrls: ['tree-view.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class TreeViewComponent {
      
      node1 : TreeNode = new TreeNode("Java", ["Object", "Oriented"], ["obj.java","obj2.java"],false) ;
      node2 : TreeNode = new TreeNode("C++", ["Object", "Oriented"], ["obj.cpp","obj2.cpp"],false) ;
      
      nodes : TreeNode[] = [this.node1, this.node2]; 

      toggle(node){
        node.expanded = !node.expanded;
    }
}
