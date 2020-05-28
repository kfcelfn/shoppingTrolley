import { detailsData, derailsComment, derailsComment1, detailsData1, addToCar,  } from '@/services'
import { DECIDE_DETAILS_DATA, DECIDE_COMMENT_DATA, DECIDE_COMMENT_DATA1, DECIDE_DETAILS_DATA1, DECIDE_ADD_DATA,  } from '@/constants/actionTypes'
export function detailsAction(option) {
  return {
    type: DECIDE_DETAILS_DATA,
    payload:detailsData(option)
  }
}
export function commentAction(option) {
  return {
    type: DECIDE_COMMENT_DATA,
    payload:derailsComment(option)
  }
} 
export function commentAction1(option) {
  return {
    type: DECIDE_COMMENT_DATA1,
    payload:derailsComment1
  }
}
export function detailsAction1(option) {
  return {
    type: DECIDE_DETAILS_DATA1,
    payload:detailsData1
  }
}
export function addAction(option) {
  return {
    type: DECIDE_ADD_DATA,
    payload:addToCar(option)
  }
}
