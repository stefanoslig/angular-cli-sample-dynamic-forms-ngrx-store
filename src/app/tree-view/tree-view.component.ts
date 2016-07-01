import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TreeNode } from './index';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {AppState} from '../shared/index';
import { TOGGLE_NODE } from '../actions/index';

 
@Component({
  moduleId: module.id,
  selector: 'app-tree-view',
  templateUrl: 'tree-view.component.html',
  styleUrls: ['tree-view.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class TreeViewComponent {
      nodes: Observable<TreeNode[]>;
      constructor(
        private _store : Store<AppState>
      ){
        this.nodes = this._store.select<TreeNode[]>('tree');
      } 

      toggle(node: TreeNode){
        this._store.dispatch({type: TOGGLE_NODE, payload: node.name});
    }
}
