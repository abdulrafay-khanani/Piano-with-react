import {createContext, Component} from 'react';
import SoundFontPlayer from 'soundfont-player'

export const AudioContext = createContext()

class AudioContextProvider extends Component {
        
        setInstrument = (instrumentname) => {
            let nullSoundplayerAudio = {
                stop () {}
            }
            let nullSound = {
                play(){
                    return nullSoundplayerAudio
                }
            }
            let soundplayer = nullSound
            SoundFontPlayer.instrument(AudioContext, instrumentname)
            .then(soundfontplayer =>{
                soundplayer = soundfontplayer
            })
            .catch(e => {
                soundplayer = nullSound
            })
        }
            
        playNote = (note) => {
            let nullSoundplayerAudio = {
                stop () {}
            }
            let nullSound = {
                play(){
                    return nullSoundplayerAudio
                }
            }
            let soundplayer = nullSound
            soundplayer.play(note)
        }
    render() { 
        return ( 
            <AudioContext.Provider value={{setInstrument :this.setInstrument,playNote: this.playNote}}>
                {this.props.children}
            </AudioContext.Provider>
         );
    }
}
 
export default AudioContextProvider;