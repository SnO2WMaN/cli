#!/usr/bin/env node

import capitalize from 'lodash.capitalize'
import open from 'open'

import React, { Component } from 'react'
import { render, Text, Box, Color } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
import SelectInput from 'ink-select-input'

import sno2wman from './index'

const links = Object.entries(sno2wman.socials)
	.filter(
		({ 0: key }) =>
			![
				'email',
				'discord',
				'spotify',
				'soundcloud',
				'tumblr',
				'amazon'
			].includes(key)
	)
	.sort((a, b) => {
		if (a[0] === 'website') return -1
		if (b[0] === 'website') return 1
		return 0
	})
	.map(({ 0: key, 1: link }) => {
		return {
			label: capitalize(key),
			value: link
		}
	})

class CLI extends Component {
	render() {
		return (
			<div>
				<Box flexDirection="column" alignItems="center">
					<Box
						flexDirection="column"
						alignItems="center"
						marginBottom={1}
					>
						<Gradient name="vice">
							<BigText text={sno2wman.name} />
						</Gradient>
						<Text bold italic>
							Frontend, Webdesign, Pixelart, Nerd
						</Text>
					</Box>
					<Box alignItems="flex-start" marginBottom={1}>
						<SelectInput
							items={links}
							onSelect={({ value: url }) =>
								open(url, { wait: false })
							}
						/>
						<Box flexDirection="column" marginLeft={6}>
							{[
								{ key: 'name', value: sno2wman.name },
								{
									key: 'sex',
									value: (s => {
										switch (s) {
											case 1:
												return 'male'
											case 2:
												return 'female'
											default:
												return 'other'
										}
									})(sno2wman.sex)
								},
								{ key: 'locate', value: sno2wman.locale },
								{ key: 'age', value: sno2wman.age },
								{
									key: 'birthday',
									value: (date =>
										`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)(
										sno2wman.birthday
									)
								},
								{ key: 'religion', value: sno2wman.religion }
							].map(({ key, value }) => (
								<Box key={key} justifyContent="space-between">
									<Box marginRight={2}>
										<Text>{key}</Text>
									</Box>
									<Box flexGrow={2} justifyContent="flex-end">
										<Box>
											<Color cyan>{value}</Color>
										</Box>
									</Box>
								</Box>
							))}
						</Box>
					</Box>
					<Text>
						<Color green>Exit</Color> : Ctrl+C
					</Text>
				</Box>
			</div>
		)
	}
}

render(<CLI />)
