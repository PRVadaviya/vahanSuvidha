import Golf6 from '../../../../../assets/Passanger_vehicles/Golf6.jpg';
import AudiA1 from '../../../../../assets/Passanger_vehicles/AudiA1.jpg';
import Bmw320 from '../../../../../assets/Passanger_vehicles/Bmw320.jpg';
import Benz from '../../../../../assets/Passanger_vehicles/Benz.jpg';
import Passat from '../../../../../assets/Passanger_vehicles/passatcc.jpg';
import Toyota from '../../../../../assets/Passanger_vehicles/toyotacamry.jpg';
import API from '../../../../../api';



const HarvestorList = async () => {
    try {
        
        const response = await fetch(`${API}/vehicle/find/harvester`);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
}

export default HarvestorList;
