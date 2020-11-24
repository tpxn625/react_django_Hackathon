import CustomComponent from '../../components/Post/CustomComponent';
import {useDispatch,useSelector} from 'react-redux';
import { clickMinus, clickPlus } from '../../modules/CustomBtnClick';


const CustomContainer = ({material}) => {
    // const dispatch = useDispatch();
    // const {value} = useSelector(state => ({
    //     value: state.CustomBtnClick.value,
    // }));   
    

    // const onHandleClickMinus = () => {
    //     if(value > 1){
    //         dispatch(clickMinus(value));
    //     }
    // }

    // const onHandleClickPlus= () => {
    //     if(value < 9){
    //         dispatch(clickPlus(value));
    //     }
    // }

    return(
        <>
            <CustomComponent 
                material={material}
            />
        </>
    )
}

export default CustomContainer;