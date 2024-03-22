import { inspect } from "util"
import { ListNode } from "./LinkedLists"

export function drawTree(listNode: ListNode | null) {
	console.log(inspect(listNode, { showHidden: false, depth: null, colors: true }))
}
