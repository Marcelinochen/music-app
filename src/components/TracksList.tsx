import { FlatList, FlatListProps, View, Text} from "react-native"
import { TrackListItem } from "@/components/TrackListItem"
import { utilsStyles } from "@/styles"
import TrackPlayer, { Track } from "react-native-track-player"
import { unknownTrackImageUri } from "@/constants/images"
import FastImage from "react-native-fast-image"

export type TracksListProps = Partial<FlatListProps<Track> & {
    tracks: Track[]
}>

const ItemDivider = () => {
    <View style={{...utilsStyles.itemSeparator, marginVertical:9, marginLeft: 60}}/>
}

export const TracksList = ({tracks, ...flatlistProps}: TracksListProps) => {
    const handleTrackSelect = (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }

    return (
        <FlatList 
            data={tracks} 
            contentContainerStyle={{paddingTop:10, paddingBottom: 128}}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            ListEmptyComponent={<View>
                <Text style={utilsStyles.emptyContentText}>No songs found</Text>

                <FastImage 
                    source={{uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
                    style={utilsStyles.emptyContentText}
                />
            </View>}
            renderItem={({item: track})=>(
                <TrackListItem 
                    track={{track} onTrackSelect={handleTrackSelect}} 
                />
            )} 
            {...flatlistProps}
        />
    )
}