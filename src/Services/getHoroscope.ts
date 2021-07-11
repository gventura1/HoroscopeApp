import api from './api'

export async function getHoroscope() {
    const date = new Date()

    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    var today = yyyy + '-' + mm + '-' + dd;
    return api.get("horoscope/test?dt=" + today);
}