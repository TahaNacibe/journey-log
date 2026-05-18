
export interface DisplayStoreInterface {
    layout: {
        quests_board: boolean,
        profile_banner: boolean,
    }
    display: {
        dark_mode:string
    }
    update_quest_board_state: (state: boolean) => void,
    update_profile_banner_state: (state: boolean) => void,
    update_theme_state: (state:string) => void
}