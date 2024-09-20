import { TrackList } from "@/components/TracksList"
import { defaultStyles } from "@/styles"
import {View, Text} from "react-native"
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated"

const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <TrackList scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen