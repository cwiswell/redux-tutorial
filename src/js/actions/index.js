// using this const/enum will prevent typos from the action types
import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};