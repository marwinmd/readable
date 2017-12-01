export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
export const LOAD_POSTS_FOR_CATEGORY = 'LOAD_ALL_CATEGORY';
export const {LOAD_COMMENT_FOR_POST} = 'LOAD_COMMENT_FOR_POST';

export function loadAllCategories({categories}) {
    console.log({categories})

    return {
        type: LOAD_ALL_CATEGORIES,
        categories
    };
}

export function loadPostsForCategory({categorie}) {
    return {
        type: LOAD_POSTS_FOR_CATEGORY,

    }
}

export function loadCommentsForPost({postId}) {
    return {
        type: LOAD_COMMENT_FOR_POST,
        postId
    }
}