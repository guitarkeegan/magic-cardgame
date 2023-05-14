use std::fs;
mod cards;
use cards::land::Land;

fn main() {
    let plain = Land {
        name: "plain".to_string(), 
        image_url: "".to_string(),
        original_text: "words about the card".to_string(), 
        cmc: 0u8, 
        id: todo!(),
        text: todo!(),
    }; 
}
