'use strict';

import React from "react";
import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

var ComingSoonPage = React.createClass({
	statics: {
		title: 'Coming soon...'
	},
	render() {
		return (
			<ContentSection title={ComingSoonPage.title}>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/COMING-SOON')}}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default ComingSoonPage;