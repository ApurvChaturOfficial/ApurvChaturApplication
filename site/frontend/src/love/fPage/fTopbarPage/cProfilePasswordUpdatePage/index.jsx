import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';
import Function from './extra/Function';

// Component
import ProfilePasswordUpdateComponent from 'src/love/cComponent/fTopbarComponent/children/cProfilePasswordUpdateComponent'

// Other
import submitFormObject from 'src/love/dFunction/cSubmitFormObject';
import validateFormObject from 'src/love/dFunction/bValidateFormObject';


const ProfilePasswordUpdatePage = ({ ReduxUltimate }) => {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProfilePasswordUpdatePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux, ReduxUltimate),
		ProfileUpdatePasswordAPICall: () => APIs.ProfileUpdatePasswordAPI(Redux, ReduxUltimate)
	}	

  // All Render
	// First Render
	useEffect(() => {
		APICalls.ProfileRetrieveAPICall()
	}, [])

	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ProfileUpdatePasswordAPICall)
	}, [Redux.state.FormObject.FormError])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject?.Loading ? "Loading..." :
				<ProfilePasswordUpdateComponent Redux={Redux} OnClick={event => validateFormObject(event, Redux, Function.validateFormValues)} />
			}
    </React.Fragment>
  )
}

export default ProfilePasswordUpdatePage