async function getAccessToken() {
  const clientId = "96e7256145604795b1d0616993887192";
  const clientSecret = "7845a4aaf4464868a80fb8026677fc79";
  const url = "https://accounts.spotify.com/api/token";
  const encodedData = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await axios.post(url, "grant_type=client_credentials", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedData}`,
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", error);
  }
}

const searchAlbum = async () => {
  let nombreArtista = document.getElementById("nombreArtista");
  let nombreAlbum = document.getElementById("nombreAlbum");
  let fotoAlbum = document.getElementById("fotoAlbum");
  let fotoArtista = document.getElementById("fotoArtista");
  let listaCanciones = document.getElementById("listaCanciones");
  const artistName = document.getElementById("artist").value;

  const token = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(
        artistName
      )}`,
      { headers }
    );
    const data = response.data;
    const artistId = data.artists.items[0].id;
    console.log(data);
    fotoArtista.src = data.artists.items[0].images[0].url;

    const albumsResponse = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      { headers }
    );
    const albumsData = albumsResponse.data;
    const firstAlbumId = albumsData.items[0].id;

    const albumResponse = await axios.get(
      `https://api.spotify.com/v1/albums/${firstAlbumId}`,
      { headers }
    );
    const albumData = albumResponse.data;
    console.log(albumData);
    nombreArtista.innerHTML = albumData.artists[0].name;
    nombreAlbum.innerHTML = albumData.name;
    fotoAlbum.src = albumData.images[0].url;

    let canciones = albumData.tracks.items;
    console.log(canciones);

    let todasLasCanciones = "";
    canciones.forEach((cancion, index) => {
      let nombreCancion = cancion.name;
      let cancionUrl = cancion.preview_url;
      todasLasCanciones += `
              <div class="col-12 col-md-4 text-center">
                  <p>${nombreCancion}</p>
                  <audio controls>
                      <source src="${cancionUrl}" type="audio/mpeg">
                      Your browser does not support the audio element.
                  </audio>
              </div>`;
      console.log(nombreCancion);
      console.log(cancion.preview_url);
    });
    listaCanciones.innerHTML = todasLasCanciones;
  } catch (err) {
    console.error(err);
  }
};
