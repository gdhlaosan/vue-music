let singer = {}
try {
    singer = JSON.parse(localStorage.singer)
} catch (err) {}

export default {
    singer: singer
}
