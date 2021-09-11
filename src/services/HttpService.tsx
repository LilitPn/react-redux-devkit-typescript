
export default class HttpService {
    static _requestOptionsForPostMethod = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    static getCategories() {
        return fetch('https://api.thecatapi.com/v1/categories', this._requestOptionsForPostMethod)
            .then(res => res.json());
    }

    static getImages(limitedCount: number = 10) {
        return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limitedCount}&page=1&category_ids=1`, this._requestOptionsForPostMethod)
            .then(res => res.json());

    }
}
