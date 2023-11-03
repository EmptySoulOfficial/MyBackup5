#include <iostream>
#include <dirent.h> //for finding all files from an directory
#include <stdlib.h> //for system
#include <algorithm> //for replace
#include <string>

using namespace std;

string dloc; //document location
int uicf = 0; //user input choosed file

void rso() //replace slashes operation
{
    string old("\\"), rep("\\\\");
    for (unsigned int pos=0; (pos = dloc.find(old, pos)) != std::string::npos;  pos+=rep.length())
    {
        dloc.replace(pos, old.length(), rep);
    }
}

int cdo(string fn) //c dot operation (find the dot operation)
{
    bool wdon;
    int dcv = 0;

    char searchItem = '.';
    int length = fn.size();

    for(int  i = 0;i < length;i++)
    {
        if(fn[i] == searchItem){dcv++;}
    }
    if(dcv >= 1){wdon=true;} //it has
    else{wdon=false;} //it does not

    return wdon; //true or false
} //tell if the file has or not an dot in it

void mfo(string dloc, int opt) //many functions operation
{
    DIR *dir;
    struct dirent *ent;
    int fin = 0;


    if ((dir = opendir (dloc.c_str())) != NULL)
    {
        while ((ent = readdir (dir)) != NULL)
        {
            if(opt == 0) //showing the files and folders in an directory
            {
                fin++;
                cout<<fin<<": "<<ent->d_name<<endl;
            }
            else if(opt == 1) //entering to an user inputed file or folder
            {
                fin++;
                if(fin == uicf)
                {
                    bool ssc;
                    dloc += ent->d_name;
                    if(cdo(ent->d_name) == false){ssc=true; dloc+= "\\\\";} //an folder
                    if(ssc != true){system(dloc.c_str());} //an file

                    system("cls");
                    rso(); //replace slashes
                    mfo(dloc, 0); //show files again in the new folder
                }
            }
        }
        closedir (dir);
    }
    else
    {
        cout<<"ERROR!"<<endl;
    }
}

int main()
{
    cout<<"Introduce your directory location: ";
    getline(cin, dloc); //user input the location
    system("cls"); //delete screen

    rso(); //Replace slashes
    mfo(dloc, 0); //Show the files and folder in the user inputed directory

    while(1) //infinite loop
    {
        uicf = 0; //reseting the choosed value
        cout<<endl<<"Which one to open? (number): ";
        cin >> uicf; //take the input value again
        mfo(dloc, 1); //get into file operation
    }

    return 0;
}
