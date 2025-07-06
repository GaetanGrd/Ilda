use serde::Serialize;


#[derive(Serialize)]
pub struct Webtoon {
    pub id: String,
    pub title: String,
    pub author: String,
    pub description: String,
    pub image_url: String
}

#[tauri::command]
pub fn get_list_of_webtoons() -> Vec<Webtoon> {
    vec![
        Webtoon {
            id: "Solo-Leveling".to_string(),
            title: "Solo Leveling".to_string(),
            author: "Author 1".to_string(),
            description: "This is the first webtoon".to_string(),
            image_url: "https://fr.web.img5.acsta.net/pictures/23/09/11/09/25/4087505.jpg".to_string()
        },
        Webtoon {
            id: "webtoon-2".to_string(),
            title: "Webtoon 2".to_string(),
            author: "Author 2".to_string(),
            description: "This is the second webtoon".to_string(),
            image_url: "https://m.media-amazon.com/images/I/81jm48GH5KL.jpg".to_string()
        }
    ]
}

