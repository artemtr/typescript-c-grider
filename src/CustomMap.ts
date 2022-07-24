export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    getContent(): string;
}

export class CustomMap {
    private googleMap: any;

    constructor(idDiv: string,) {
        this.googleMap = new google.maps.Map(
            document.getElementById(idDiv),
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            })

    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.getContent()
            })
            infoWindow.open(this.googleMap, marker);
        })



    }
}