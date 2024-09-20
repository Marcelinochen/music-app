import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import {View, Text} from "react-native"
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated"
import library from "@/assets/data/library.json"
import { trackTitleFilter } from "@/helpers/filter"
import { useMemo } from "react"

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs',
        },
    })

    const filteredTracks = useMemo(() => {
        if (!search) return library
        
        return library.filter(trackTitleFilter(search))
    }, [search])
    
    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsertAdjustmentBehavior='automatic'
                style={{paddingHorizontal: screenPadding.horizontal }}
            >
                <TracksList tracks={filteredTracks} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen