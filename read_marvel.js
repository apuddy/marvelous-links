const BIFROST_PREFIX = "https://bifrost.marvel.com/v1/catalog/digital-comics/metadata/";
const SMART_LINK_PREFIX = "https://marvel.smart.link/fiir7ec77?type=issue&drn=drn:src:marvel:unison::prod:38861ac6-40bd-49a0-8698-e92fddfb2b35&sourceId=";

var loc = window.location.toString();

var digitalIdPos  = loc.lastIndexOf("/");
var digitalId = loc.slice(digitalIdPos + 1, loc.length);

var dataUrl = BIFROST_PREFIX + digitalId;

var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
    if(this.readyState === 4) {
        var json = JSON.parse(this.responseText);
        var issueId = json.data.results[0].issue_meta.catalog_id;
        var newUrl = SMART_LINK_PREFIX + issueId;
        window.location.replace(newUrl);
    }
});
xhr.open("GET", dataUrl);
xhr.send();