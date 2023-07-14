import { FC, useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import Icon from '../../components/Icon/Icon'

import microphoneSvg from '../../assets/media/icons/microphone-svg.svg'
import clearSvg from '../../assets/media/icons/delete.svg'

import './ListenerPage.scss'

const ListenerPage: FC = () => {
	const [text, setStr] = useState<string[]>([''])
	const [isListening, setIsListening] = useState<boolean>(false)

	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: 'en-EN' })

	const commands = [
		{
			command: '*',
			callback: (phrase: string) => {
				if (phrase) {
					phrase.split(' ').forEach((word) => {
						setStr((text) => [...text, ` ${word}${Math.floor(Math.random() * 999)}`])
					})
				}
			},
		},
	]
	const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition({
		commands,
	})

	const handleListening = () => {
		if (!isListening) {
			startListening()
			setIsListening(true)
		} else {
			SpeechRecognition.stopListening()
			setIsListening(false)
		}
	}

	const handleClear = () => {
		resetTranscript()
		setStr([''])
	}

	useEffect(
		() => () => {
			SpeechRecognition.stopListening()
		},
		[]
	)

	if (!browserSupportsSpeechRecognition) {
		return (
			<div className="listener-page">
				Ивините, программа не поддерживается браузером. Побробуйте Chrome.
			</div>
		)
	}

	return (
		<div className="listener-page">
			<div className="listener-page__btns">
				<Icon
					icon={microphoneSvg}
					size={47}
					className={isListening ? 'active' : ''}
					onClick={handleListening}
				/>
			</div>
			<div className="listener-page__text">
				{text.length > 1 ? (
					<div className="text-wrapper">
						<div className="listener-page__text--text">{transcript}</div>
						<div className="listener-page__text--text">{text}</div>
						<Icon icon={clearSvg} size={30} onClick={handleClear} className="white" />
					</div>
				) : (
					<div className="listener-page__text--plug">
						Нажмите на кнопку и скажите что-нибдуь в микрофон
					</div>
				)}
			</div>
		</div>
	)
}

export default ListenerPage
