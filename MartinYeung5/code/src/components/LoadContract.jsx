import { useSuiClientQuery } from '@mysten/dapp-kit';

export default function LoadContract1() {
    const packageObjectId =
        '0x422c5a96fe4a33351fbdad69e9c074b157c16e28c37801ddba19d665a256264e';

    const { data, isPending, error, refetch } = useSuiClientQuery('getOwnedObjects',
        {
            owner: '0x440a564c98eaa78c4f791a0d5642a833f32b8d33b71731ea35074435f04eb088',
            filter: {
                StructType: "0x422c5a96fe4a33351fbdad69e9c074b157c16e28c37801ddba19d665a256264e::digital_contract_20240521::Contract",
            },

        }
       // , 
       // { 
       //     queryKey: ['SharedObjects'] 
       // }
    );
    

    if (isPending) {
        return <div>Loading...</div>;
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}